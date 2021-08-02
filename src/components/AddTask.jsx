import { useState } from 'react';

const AddTask = ({ onAdd }) => {
     const [text,setText] = useState('')
     const [day,setDay] = useState('')
     const [reminder,setReminder] = useState(false)

     const onSubmit = (e)=>{
          e.preventDefault()
          if(!text){
              alert('Please add text')
              return
            }

          onAdd({text,day,reminder})

          setText('')
          setDay('')
          setReminder(false)
     }

    return (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
              <label htmlFor="">Task</label>
              <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="add task"/>
          </div>
          <div className="form-control">
              <label htmlFor="">Day and Time</label>
              <input type="text" value={day} onChange={(e)=>setDay(e.target.value)} placeholder="add day and time"/>
          </div>
          <div className="form-control-check">
              <label htmlFor="">Set Reminder</label>
              <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
          </div>
          <input className="btn btn-block" type="submit" value="Save task" />
        </form>
    )
}

export default AddTask
