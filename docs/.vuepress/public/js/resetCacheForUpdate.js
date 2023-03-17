// delete all caches
function deleteCaches() {
  return new Promise((resolve, reject) => {
    window.caches.keys().then(keys => {
      Promise.all(keys.map(key => caches.delete(key)))
        .then(_ => {
          resolve();
        })
        .catch(err => {
          reject(err);
        })
    })
  })
}


/* function async deleteCaches() {
  try {
    const keys = await window.caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
  } catch (err) {
    console.log('deleteCache err: ', err);
  }
} */

// run this function on your app load
function resetCacheForUpdate() {
  console.log('resetCacheForUpdate is running...')
  if (!localStorage.getItem('cacheReset')) {
    deleteCaches()
      .then(_ => {
        localStorage.setItem('cacheReset', 'yes');
      })
  }
}

resetCacheForUpdate()
