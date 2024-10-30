const exec = require("child_process").exec;

test("npx easycli hello --name Ana", (done) => {
    exec("node main.js hello --name Ana", (error, stdout) => {
        expect(stdout).toBe("Olá, Ana!\n");
        done();
    });
});
