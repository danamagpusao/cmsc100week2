var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
    router.route('/students')
        .get(student.find)
        .post(student.insert);
    router.route('/teacher')
        .get(teacher.find);
    router.route('/teacher')
        .post(teacher.create);
    router.route('/teacher')
        .put(teacher.update);
    router.route('/teacher')
        .delete(teacher.delete);
        
   router.route('/students/:id') //expects a parameter
        .get(student.findOne)
        .put(student.update)
        .delete(student.remove);
        return router;
        
}