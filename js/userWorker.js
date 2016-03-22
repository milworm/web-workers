self.addEventListener('message', function(e) {
    var buff = e.data.userData,
        user = new Int32Array(buff),
        data = {};

    user[1] += 1; // age + 1
    data.userData = buff;

    self.postMessage(data, [data.userData]);
});
