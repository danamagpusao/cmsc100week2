var request = require('supertest'),
    should= require('should-http');
  describe('student',function(){ //collection of test cases for the whole student module
        var url = 'localhost:5000';
        describe('find()',function(){ //for each unit
            it('should retrieve all student record', function(done){
                request(url)
                .get('/students')   
                .end(function(err,res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Array);
                    done();
                });
            });
        });
        
         describe('findOne()',function(){ //for each unit
            it('should retrieve a student record', function(done){
                request(url)
                .get('/students/2018-88888')   
                .end(function(err,res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                    done();
                });
            });
        });
        
        describe('insert()',function(){ //for each unit
            it('should return a newly created record', function(done){
                request(url)
                .post('/students')
                .send({'name':'dana','studNo':'2016-55541','bdate':'1911-11-11'})   
                .end(function(err,res){
                    if(err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.an.instanceOf(Object);
                    done();
                });
            });
        });
  
  });