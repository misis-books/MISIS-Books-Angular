module.exports = {
    partials: function(req, res) {
        var filename = req.params.filename;
        if(!filename) return;
        res.render('app/partials/' + filename.replace('.html', ''));
    },
    index: function(req, res) {
        res.render('index/index');
    }
};