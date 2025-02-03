import { Routes } from "@angular/router";
import { TodoComponent } from "./components/todo/todo.component";

import { NoteComponent } from "./components/note/note.component";

const routeConfig:Routes=[
    {
        path:'',
        component:TodoComponent,
        title:'To do'
    },
    {
        path:'notite',
        component:NoteComponent,
        title:'Task'
    }
]

export default routeConfig;