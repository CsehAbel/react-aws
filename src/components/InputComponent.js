import React from 'react';

const InputComponent = ({containerId,arrayItems}) => {
  //take the containerId and the arrayItems as props
  //and return
  //for example:  guessing1 , [Leute, Thema, Führerschein, Jahren, mögen,schreiben]
  //return:
        // <div id="guessing1">
        //     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#guessing1 #1-0">
        //         <div class="noun collapse collapsed" id="1-0">
        //             Leute
        //         </div>
        //     </button>
        //     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#guessing1 #1-1">
        //         <div class="verb collapse collapsed" id="1-1">
        //             mögen
        //         </div>
        //     </button>
        //     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#guessing1 #1-2">
        //         <div class="noun collapse collapsed" id="1-2">
        //             Thema
        //         </div>
        //     </button>
        //     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#guessing1 #1-3">
        //         <div class="noun collapse collapsed" id="1-3">
        //             Führerschein
        //         </div>
        //     </button>
        //     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#guessing1 #1-4">
        //         <div class="noun collapse collapsed" id="1-4">
        //             Jahren
        //         </div>
        //     </button>
        //     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#guessing1 #1-5">
        //         <div class="verb collapse collapsed" id="1-5">
        //             schreiben
        //         </div>
        //     </button>
        // </div>
  //Here is the code:
  const buttons = arrayItems.map((item) => (
    <button
      key={item.id}
      className="btn btn-primary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#${containerId} #${item.id}`}
    >
      <div className={`${item.type} collapse collapsed`} id={item.id}>
        {item.text}
      </div>
    </button>
  ));

  return <div id={containerId}>{buttons}</div>;
}

export default InputComponent;