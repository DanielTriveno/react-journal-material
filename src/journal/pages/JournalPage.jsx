import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    
    <JournalLayout>
      
    {/*<Typography>Minim officia amet reprehenderit laborum aute ut commodo amet mollit ad aliquip officia adipisicing.</Typography>*/}    

    {/* <NothingSelectedView /> */}
    <NoteView />

    </JournalLayout>
  )
}
