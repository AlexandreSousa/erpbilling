module.exports = (app) =>{
    app.get('/page/:id',(req,res)=>{
        var id = req.params.id;
        /** verifica se tem uma session iniciada */
        if (req.session.autorizado) {
            /**
             * Passamos este objeto para a nossa viewl para que amesma possa montar o menu
             */
            var mem = app.app.controlles.menu.menu(app, req, res);
            res.render('index', { menu: mem, page: id  });
        } else {
            /** se não tiver uma session ativa redireciona para o login */
            res.render('login');
        }
    })
}