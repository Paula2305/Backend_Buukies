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

export const getBook = async (req, res) => {
    try {
        const allBooks = await Book.find();
        return res.status(200).json(allBooks);
    } catch (error) {
        console.error('Error fetching books:', error);
        return res.status(500).json({ error: 'An error occurred while fetching books.' });
    }
};

export const deleteBook = async(req,res) => {
    try {
        const book = await Book.deleteOne( { _id : req.id})
        return res.status(204);
    }catch{
        console.error('Error deleting book:', error);
        return res.status(404);
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




