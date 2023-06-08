const corsOptions = {
    origin: "http://localhost:3000",
	methods: ["GET", "POST", "PUT", "DELETE"], //methods that we allow url to do. By default, it allow all methods
	credentials: true, //allow cookies to be sent
}

module.exports = corsOptions
