const validStates = ['active', 'others', 'completed'];

class NoteStore {
    activeNotes = [];
    othersNotes = [];
    completedNotes = [];
    constructor(states) {
        this.states = states;
    }
    addNotes(state, name) {
        if (name === '' && name === undefined) {
            return 'Name cannot be empty';
        }
        if (name !== '' && !this.states.includes(state)) {
            return `Invalid state ${state}`;
        }
        this.getNoteList(state).push(name);
    }
    getNotes(state) {
        if (!state) {
            return [];
        }
        if (state && !this.states.includes(state)) {
           return `Invalid state ${state}`;
        }
        return this.getNoteList(state);
    }
    getNoteList(state) {
        if (state === 'active') {
            return this.activeNotes;
        } else if (state === 'completed') {
            return this.completedNotes;
        }
        return this.othersNotes;
    }
}

const noteStore = new NoteStore(validStates);

noteStore.addNotes('active', 'note 1');
noteStore.addNotes('active', 'note 2');
noteStore.addNotes('active', '');
noteStore.addNotes('active', 'note 3');
noteStore.addNotes('others', 'note 4');
noteStore.addNotes('others', 'note 5');
noteStore.addNotes('completed', 'note 6');
noteStore.addNotes('test', 'note 7');

const activeNote = noteStore.getNotes('active').filter(item => item !== '');
const othersNote = noteStore.getNotes('others').filter(item => item !== '');
const completedNote = noteStore.getNotes('completed').filter(item => item !== '');

console.log(activeNote);
console.log(othersNote);
console.log(completedNote);
