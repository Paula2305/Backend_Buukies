import Book from "../modelos/book.model.js";

export const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    return res.status(201).json({ message: req.body });
  } catch (error) {
    console.error("Error creating book:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the book." });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
  } catch (error) {
    console.error("Error fetching books:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching books." });
  }
};

export const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findById({ _id: id });
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching books." });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    await Book.deleteOne({ _id: id });
    return res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting book:", error);
    return res.status(404).send("Error deleting book");
  }
};

export const updateBook = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = req.body;
    await Book.updateOne(filter, update);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).send("Error updating book");
  }
};

export const getBooksByGenero = async (req, res) => {
  try {
    const genero = req.params.genero;
    const result = await Book.find({ genero: genero });
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while traers books." });
  }
};

// /books/filtro?genero=romance&precio_minimo=1000&precio_maximo=2000
// const docs = await User.find({ email: /gmail/ });

export const getBooksByFiltro = async (req, res) => {
  try {
    // if (req.query) {
    //     const query = req.query;
    //     const orQuery = [];
    //     if (query.genero) orQuery.push({ genero: query.genero });
    //     if (query.title) orQuery.push({ title: query.title });
    // }

    // Existe genero? Se agrega al array
    // Existe precio minimo? Se agrega al array (Chequear si hay precio max) --> Precio > Minimo
    // Existe precio maximo? Se agrega al array (Chequear si hay precio min) --> Precio < Maximo
    // Existen ambos? Tiene que ser un rango entre max y min.
    // Buscar logica otras weas.

    // Ejemplos queries
    // N parametros: details.find({ age: 21, location: "New York" })
    // Rango: price: { $lte: maxPrice || 1000000000, $gte: minPrice || 0 }

    // filter?titulo=el+senor+de+los+anillos
    // regex = reemplazar + por " "
    // resultado = /el señor de los anillos/
    const orQuery = [];

    if (req.query) {
      const query = req.query;
      console.log(req.query);
      if (query.titulo) {
        const titulo = req.query.titulo;
        const queryTitulo = {titulo: { $regex: new RegExp(titulo, "i") },};
        orQuery.push(queryTitulo);
        console.log(orQuery);
      }
      if(query.genero){
        const genero = req.query.genero;
        const queryGenero = { genero: {$regex: new RegExp(genero,"i")},};
        orQuery.push(queryGenero);
      }
    }
    const result = await Book.find({$or: orQuery});
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while filtrar books." });
  }
};
