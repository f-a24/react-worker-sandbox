self.addEventListener('message', message => {
	setTimeout(() => {
		const rgb = message.data;
		self.postMessage(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a});`);
	}, 500);
});