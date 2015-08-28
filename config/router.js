var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
    router.route('/student')
        .get(student.find);
    router.route('/teacher')
        .get(teacher.find);
    router.route('/teacher')
        .post(teacher.create);
    router.route('/teacher')
        .put(teacher.update);
    router.route('/teacher')
        .delete(teacher.delete);
        return router;
        
}