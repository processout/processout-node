'use strict';

var expect = require('chai').expect;

var processout = require('..');
var client = new processout.ProcessOut('proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_fBjPvkgT8gyKc1SUpy0PfjL7UgsRmUug');

function handleError(done, fn) {
    try { // boilerplate to be able to get the assert failures
        fn();
    } catch (error) {
        done(error);
    }
}

describe('Project', function() {
    it('should expand a customer project and expand gateways', function(done) {
        this.timeout(4000);

        var options = {expand: ["project"]};
        client.newCustomer().create(options).then(function(customer) {
            handleError(done, function() {
                expect(customer).not.to.be.empty;
                var project = customer.getProject();
                expect(project).not.to.be.empty;
                expect(project.getId()).not.to.be.empty;

                project.fetchGatewayConfigurations().then(function(conf) {
                    handleError(done, function() {
                        expect(conf).not.to.be.empty;
                    });
                    done();
                }, function(err) {
                    done(err);
                });
            });
        }, function(err) {
            done(err);
        });
    });
});
