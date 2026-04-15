const Costume = require('../models/costume');

// List of all Costumes
exports.costume_list = async function(req, res) {
    try {
        theCostumes = await Costume.find();
        res.send(theCostumes);
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Get one Costume by ID
exports.costume_detail = async function(req, res) {
    try {
        const item = await Costume.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Sorry, that costume was not found.' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.', error: err.message });
    }
};

// Handle Costume create on POST
exports.costume_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Costume();
    document.costume_type = req.body.costume_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume update on PUT
exports.costume_update_put = async function(req, res) {
    try {
        const item = await Costume.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Sorry, that costume was not found.' });
        }
        if (req.body.costume_type !== undefined) item.costume_type = req.body.costume_type;
        if (req.body.size !== undefined) item.size = req.body.size;
        if (req.body.cost !== undefined) item.cost = req.body.cost;
        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.', error: err.message });
    }
};

exports.costume_delete = async function(req, res) {
    try {
        const deletedDoc = await Costume.findByIdAndDelete(req.params.id);
        if (!deletedDoc) {
            return res.status(404).json({ message: 'No costume found with that id.' });
        }
        res.json({ message: 'Deleted successfully', deleted: deletedDoc });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// VIEWS
// Handle a show all view
exports.costume_view_all_Page = async function(req, res) {
    try {
        theCostumes = await Costume.find();
        res.render('costumes', { title: 'Costume Search Results', results: theCostumes });
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show detail view
exports.costume_view_detail_Page = async function(req, res) {
    try {
        const item = await Costume.findById(req.query.id);
        res.render('costumedetail', { item: item });
    } catch (err) {
        res.render('costumedetail', { item: null });
    }
};
// Handle a show create view
exports.costume_view_create_Page = async function(req, res) {
    res.render('costumecreate');
};

// Handle a show update view
exports.costume_view_update_Page = async function(req, res) {
    try {
        const item = await Costume.findById(req.query.id);
        res.render('costumeupdate', { item: item });
    } catch (err) {
        res.render('costumeupdate', { item: null });
    }
};