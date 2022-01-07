export default function handler(req, res) {
    console.log('/api/hello');
    // res.status(200).json({
    //     id: 'kjw204',
    //     text: 'Hello',
    // });
    res.redirect(307, '/api/bye');
}
