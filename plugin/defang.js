/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
/* global global, Office, self, window */
Office.onReady(() => {
    // If needed, Office.js is ready to be called
  });
  
  /**
   * Shows a notification when the add-in command is executed.
   * @param event {Office.AddinCommands.Event}
   */
  function action(event) {
    const message = {
      type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
      message: "Defang Test.",
      icon: "Icon.80x80",
      persistent: true
    };
  
    // Show a notification message
    Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);
  
    console.log("defang test")
  
    // Be sure to indicate when the add-in command function is complete
    event.completed();
  }

  /*
  function testFunc(event) {
    const message = {
      type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
      message: "Defang testFunc.",
      icon: "Icon.80x80",
      persistent: true
    };
  
    // Show a notification message
    Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);
  
    console.log("defang testFunc")

  
    // Be sure to indicate when the add-in command function is complete
    event.completed();
  }
  */
  
  function getGlobal() {
    return typeof self !== "undefined"
      ? self
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : undefined;
  }
  
  const g = getGlobal();


  // the add-in command functions need to be available in global scope
  g.action = action;
  //g.testFunc = testFunc;
  