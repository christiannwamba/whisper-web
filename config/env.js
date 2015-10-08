module.exports = function () {
    switch (process.env.NODE_ENV) {
    case 'development':
        return {
            js: ['custom/lib.js', 'lib/ckeditor/ckeditor.js', 'custom/script.js', 'custom/app.js', 'custom/datepicker/angular-datepicker.min.js'],
            css: ['dist/semantic.css', 'lib/font-awesome/css/font-awesome.min.css', 'custom/lib.css', 'custom/style.css', 'custom/datepicker/angular-datepicker.min.css']
        };

    case 'production':
        return {
            js: ['custom/lib.js', '//cdn.ckeditor.com/4.5.3/standard/ckeditor.js', 'custom/script.js', 'custom/app.js', 'custom/datepicker/angular-datepicker.min.js'],
            css: ['dist/semantic.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css', 'custom/lib.css', 'custom/style.css', 'custom/datepicker/angular-datepicker.min.css']
        };

    default:
        return 'No envirnment specified';
    }
};