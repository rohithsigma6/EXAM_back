module.exports = app => {
    app.use("/v1", require("./Models/userModel/routes/index"))
    app.use("/v1", require("./Models/TestModel/routes/index"))
};