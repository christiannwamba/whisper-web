angular.module('whisper')
    .factory('editor', function () {
        var ck = {};       
        ck = {
            extraPlugins: "eqneditor,base64image,codesnippet",
            codeSnippet_theme: 'monokai_sublime',
            allowedContent: true,
            toolbar: [{
                    name: 'basicstyles',
                    items: ['Bold', 'Italic', 'Strike', 'Underline']
                            },
                {
                    name: 'paragraph',
                    items: ['BulletedList', 'NumberedList', 'Blockquote']
                                    },
                {
                    name: 'editing',
                    items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
                                    },
                {
                    name: 'links',
                    items: ['Link', 'Unlink', 'Anchor']
                                    },
                {
                    name: 'tools',
                    items: ['SpellChecker', 'Maximize']
                                    },
                            '/',
                {
                    name: 'styles',
                    items: ['Format', 'FontSize', 'TextColor', 'PasteText', 'PasteFromWord', 'RemoveFormat']
                            },
                {
                    name: 'insert',
                    items: ['Table', 'SpecialChar', 'EqnEditor', 'base64image', 'FontAwesome', 'CodeSnippet']
                                    },

                {
                    name: 'forms',
                    items: ['Outdent', 'Indent']
                                    },
                {
                    name: 'clipboard',
                    items: ['Undo', 'Redo']
                                    },
                {
                    name: 'document',
                    items: ['PageBreak', 'Source']
                                    },
                {
                    //                                        name: 'plugins',
                    //                                        items: ['EqnEditor', 'base64image']
                                    }]
        };
        return ck;
    });