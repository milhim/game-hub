import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b1fcdd08d262445e83d4036cce5a1386",
    },
});
