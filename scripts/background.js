  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'setWarningPopup') {
        console.log('setting popup')
      chrome.action.setPopup({ popup: 'warning.html' });
      chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
      chrome.action.setBadgeText({ text: '!' });
    } else if (request.action === 'clearWarningPopup') {
      chrome.action.setPopup({ popup: '' });
      chrome.action.setBadgeText({ text: '' });
    }
  });

