module.exports = function () {
    switch (process.env.NODE_ENV) {
    case 'development':
        return {
            js: ['custom/lib.js', 'lib/ckeditor/ckeditor.js', 'custom/script.js', 'custom/app.js'],
            css:['dist/semantic.css', 'custom/lib.css', 'custom/style.css']
        };

    case 'production':
        return {
            js: ['custom/lib.js', '//cdn.ckeditor.com/4.5.3/standard/ckeditor.js', 'custom/script.js', 'custom/app.js'],
            css:['dist/semantic.css', 'custom/lib.css', 'custom/style.css']
        };

    default:
        return 'No envirnment specified';
    }
};