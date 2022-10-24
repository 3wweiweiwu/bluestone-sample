module.exports = {
    'Todo Item Hello': {
        locator: ['//LABEL[text()=\'hello\']'],
        screenshot: 'componentPic/Todo_Item_Hello.png',
        displayName: 'Todo Item Hello',
        snapshot: require('./locator/Todo Item Hello.json')
    },
    'Delete Button': {
        locator: ['//*[@class=\'destroy\' and local-name()=\'button\']'],
        screenshot: 'componentPic/Delete_Button.png',
        displayName: 'Delete Button',
        snapshot: require('./locator/Delete Button.json')
    },
    'todo inputbox': {
        locator: ['//input[@placeholder="What needs to be done?"]'],
        screenshot: 'componentPic/todo_inputbox.png',
        displayName: 'todo inputbox',
        snapshot: require('./locator/todo inputbox.json')
    },
    'todo item - wash face': {
        locator: ['//LABEL[text()=\'wash face\']'],
        screenshot: 'componentPic/todo_item___wash_face.png',
        displayName: 'todo item - wash face',
        snapshot: require('./locator/todo item - wash face.json')
    },
    'Todo Header': {
        locator: ['//H1[text()=\'todos\']'],
        screenshot: 'componentPic/Todo_Header.png',
        displayName: 'Todo Header',
        snapshot: require('./locator/Todo Header.json')
    }
};