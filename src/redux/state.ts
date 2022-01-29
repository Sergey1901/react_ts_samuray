export type StateType = {
    profilePage:PostsArrayType
    dialogPage: DialogMessageType
    }
export type DialogMessageType ={
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
}
export type DialogsDataType = {
    name: string
    id: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type PostsArrayType ={
    posts:Array< PostsType>
}
export type PostsType = {
    id:number
    message: string
    likeCount: number
}


export const state:StateType ={
    profilePage: {
            posts:  [
                {id:1, message:'Hil', likeCount: 15},
                {id:2, message:'How are you', likeCount: 25},
            ]
        },
    dialogPage: {
            dialogs:  [
                {name: 'Pasha', id: '1'},
                {name: 'Maxim', id: '2'},
                {name: 'Andrey', id: '3'},
                {name: 'Vova', id: '4'},
                {name: 'Olga', id: '5'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Good'},
                {id: 5, message: 'Good'},

            ]
    }

    }

