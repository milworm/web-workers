self.addEventListener('message', function(e) {
    switch(e.data) {
        case 'hello': {
            self.postMessage('world');
            break;
        }

        case 'world': {
            self.postMessage('hello');
            break;
        }
    }
});