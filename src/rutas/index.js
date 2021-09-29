const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "name": "luis"
    }
    res.json(data);
});

module.exports = router