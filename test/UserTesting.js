process.env.NODE_ENV = 'test';
const User = require('../model/User/UserSchema');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
chai.should();
chai.use(chaiHttp);

describe('Users', () => {
    //Delete many (You can un comment it  if you want to remove all users)
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
           done(err);
        });
    });

    //Create User
    describe('POST /api/auth/signup', () => {
        it('It should signup user', (done) => {
            const payload = {
                "email": "himansu@gmaiil.com",
                "name": "Himansu",
                "password": "HimansuSekhar"
            };
            chai.request(server)
            .post('/api/auth/signup')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done(err);
            });
        });
    });

    //GET all users
    describe('GET /api/auth/getAllUsers', () => {
        it('It should return all users', (done) => {
            chai.request(server)
            .get('/api/auth/getAllUsers')
            .end((err, res) => {
                //console.log(res)
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done(err);
            });
        });
    });

    //GET User By Id
    describe('POST /api/auth/getUserById', () => {
        it('It should return user based on id', (done) => {
            const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjI4ZjgwMTc1N2IxMDVlNmY4N2YyMCIsImlhdCI6MTYyMjMxNDg4MCwiZXhwIjoxNjIyNDAxMjgwfQ.QW92EDqzXBX3_TlDfBTQRKyG4p4XUrHSPhRRYlM1Vjs"
            chai.request(server)
            .get(`/api/auth/getUserById/60b28abe5207108359c915d9`)
            .set("x-access-token", accessToken)
            .end((err, res) => {
                res.should.have.status(404);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done(err);
            });
        });
    });

    //Update User By Id
    describe('POST /api/auth/update', () => {
        it('It should update user based on id', (done) => {
            const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjI4ZjgwMTc1N2IxMDVlNmY4N2YyMCIsImlhdCI6MTYyMjMxNDg4MCwiZXhwIjoxNjIyNDAxMjgwfQ.QW92EDqzXBX3_TlDfBTQRKyG4p4XUrHSPhRRYlM1Vjs"
            chai.request(server)
            .put(`/api/auth/update/60b28abe5207108359c915d9`)
            .set("x-access-token", accessToken)
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done(err);
            });
        });
    });

    describe('POST /api/auth/login', () => {
        it('It should return user based on id', (done) => {
            const payload = {email: "himansu@gmail.com",password: "HimansuSekhar"}
            chai.request(server)
            .post(`/api/auth/login`)
            .send(payload)
            .end((err, res) => {
                res.should.have.status(404);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done(err);
            });
        });
    });
    
    //Delete User By Id
    describe('POST /api/auth/deleteUserById', () => {
        it('It should delete user based on id', (done) => {
            const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjI4ZjgwMTc1N2IxMDVlNmY4N2YyMCIsImlhdCI6MTYyMjMxNDg4MCwiZXhwIjoxNjIyNDAxMjgwfQ.QW92EDqzXBX3_TlDfBTQRKyG4p4XUrHSPhRRYlM1Vjs"
            chai.request(server)
            .delete(`/api/auth/deleteUserById/60b28abe5207108359c915d9`)
            .set("x-access-token", accessToken)
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done(err);
            });
        });
    });


});