console.log("Main.js");

import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { CriminalList } from './criminals/CriminalList.js'
import { noteForm } from './notes/NoteForm.js'
import { OfficerSelect } from './officers/OfficerSelect.js'

ConvictionSelect();
CriminalList();
noteForm();
OfficerSelect();

// import { OfficerList } from './officers/OfficerList.js';
// OfficerList();