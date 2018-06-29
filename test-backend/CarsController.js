
module.exports = function (app) {
    const allTheCars = [
        {id: 1, make: 'Ford', model: 'Fiesta', year: '2015', color: 'blue'},
        {id: 2, make: 'Ford', model: 'Mustang', year: '2017', color: 'Orange'},
        {id: 3, make: 'Chevy', model: 'Malibu', year: '1999', color: 'burgundy'},
        {id: 4, make: 'Tesla', model: 'Model 3', year: '2017', color: 'black'},
        {id: 5, make: 'Ford', model: 'GT', year: '2005', color: 'perrywinkle'}
    ];

    app.route('/cars')
        .get((request, response) => {
            console.log("Request Received");
            response.json(allTheCars)
        })
        .post((request, response) => {
            allTheCars.concat(request.body);
            response.json(request.body)
        });
};
