function checkForSWs() {
  console.log('I will look for registered SW\'s now...')
  navigator.serviceWorker.getRegistrations()
    .then(sws => {
      if (sws[0]) {
        console.log('Found a registered SW:', sws[0], '\n Will proceed to unregister...');
        sws[0].unregister();
        console.log('Done.')
      } else {
        console.log('No registered SW\'s were found.')
      }
    })
    .catch(err => {
      console.error('An error occurred while searching for SW\'s:', err);
    })
}

checkForSWs();
