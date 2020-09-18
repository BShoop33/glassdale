console.log("Main.js");

import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { CriminalList } from './criminals/CriminalList.js'
import { noteForm } from './notes/NoteForm.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteList } from './notes/NoteList.js'

ConvictionSelect();
CriminalList();
noteForm();
OfficerSelect();
NoteList()

// import { OfficerList } from './officers/OfficerList.js';
// OfficerList();