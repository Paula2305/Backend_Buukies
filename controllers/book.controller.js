import Book from "../modelos/book.model.js"

export const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        return res.status(201).json({ message: req.body });

    } catch (error) {
        console.error('Error creating book:', error);
        return res.status(500).json({ error: 'An error occurred while creating the book.' });
    }
};

export const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find();
        return res.status(200).json(allBooks);
    } catch (error) {
        console.error('Error fetching books:', error);
        return res.status(500).json({ error: 'An error occurred while fetching books.' });
    }
};

export const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Book.findById( { _id :id})
        return res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching books:', error);
        return res.status(500).json({ error: 'An error occurred while fetching books.' });
    }
};

export const deleteBook = async(req,res) => {
    try {
        const id = req.params.id; 
        await Book.deleteOne( { _id :id})
        return res.sendStatus(204);
    }catch (error) {
        console.error('Error deleting book:', error);
        return res.status(404).send('Error deleting book');
    }
}

export const updateBook = async(req,res) => {
    try {
        const filter = {_id: req.params.id};
        const update = req.body;
        await Book.updateOne(filter, update);
        return res.sendStatus(204);
    }catch(error){
        return res.status(404).send('Error updating book');
    }
}


// const User = mongoose.model('User', Schema({
//     name: String,
//     email: String
// }));
//
// // Empty `filter` means "match all documents"
// const filter = {};
// const all = await User.find(filter);




