document.addEventListener('input', function (event) {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'textarea' || (target.tagName.toLowerCase() === 'input' && target.type.toLowerCase() === 'text')) {
      if (target.value.toLowerCase().includes('fight')) {
        chrome.runtime.sendMessage({ action: 'setWarningPopup' });
        disableSendButton(target);
      } else {
        chrome.runtime.sendMessage({ action: 'clearWarningPopup' });
        enableSendButton(target);
      }
    }
  });
  
  function disableSendButton(target) {
    const sendButton = findSendButton(target);
    if (sendButton) {
      sendButton.disabled = true;
    }
  }
  
  function enableSendButton(target) {
    const sendButton = findSendButton(target);
    if (sendButton) {
      sendButton.disabled = false;
    }
  }
  
  function findSendButton(target) {
    const parent = target.closest('form');
    if (parent) {
      return parent.querySelector('button');
    }
    return null;
  }
  