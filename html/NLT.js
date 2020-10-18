/************ 
 * Nlt Test *
 ************/

import { PsychoJS } from 'https://pavlovia.org/lib/core-3.1.5.js';
import * as core from 'https://pavlovia.org/lib/core-3.1.5.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data-3.1.5.js';
import { Scheduler } from 'https://pavlovia.org/lib/util-3.1.5.js';
import * as util from 'https://pavlovia.org/lib/util-3.1.5.js';
import * as visual from 'https://pavlovia.org/lib/visual-3.1.5.js';
import { Sound } from 'https://pavlovia.org/lib/sound-3.1.5.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'NLT';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Gen_InstrRoutineBegin);
flowScheduler.add(Gen_InstrRoutineEachFrame);
flowScheduler.add(Gen_InstrRoutineEnd);
flowScheduler.add(gen_instr_2RoutineBegin);
flowScheduler.add(gen_instr_2RoutineEachFrame);
flowScheduler.add(gen_instr_2RoutineEnd);
const BlocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlocksLoopBegin, BlocksLoopScheduler);
flowScheduler.add(BlocksLoopScheduler);
flowScheduler.add(BlocksLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.1.5';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var Gen_InstrClock;
var gen_instr_txt;
var instr_cont;
var gen_instr_2Clock;
var gen_instr_2_txt;
var instr_2_cont;
var ReadyClock;
var rdy_txt;
var rdy_cont;
var trialClock;
var NL_Pair;
var number_reminder;
var letter_reminder;
var feedbackClock;
var fdbk_txt;
var fdbk_cont;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Gen_Instr"
  Gen_InstrClock = new util.Clock();
  gen_instr_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'gen_instr_txt',
    text: 'During this task, you will see a number-letter pair presented on the screen.\n\n        Numbers 1 through 9.\n        Letters A, E, G, I, K, M, R, and U.\n\nDuring the task, pairs will appear right away.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_cont',
    text: 'Press SPACE for more instructions.',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "gen_instr_2"
  gen_instr_2Clock = new util.Clock();
  gen_instr_2_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'gen_instr_2_txt',
    text: 'In this first part, pairs will appear on the top half of the screen.\n\nWhen you see a pair, decide if the number is odd or even.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_2_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_2_cont',
    text: 'Press SPACE for more instructions.',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Ready"
  ReadyClock = new util.Clock();
  rdy_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'rdy_txt',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  rdy_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'rdy_cont',
    text: 'Press SPACE to begin.',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  NL_Pair = new visual.TextStim({
    win: psychoJS.window,
    name: 'NL_Pair',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  number_reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'number_reminder',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.45], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  letter_reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_reminder',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.45)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  fdbk_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'fdbk_txt',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  fdbk_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'fdbk_cont',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var gen_instr_key_resp;
var Gen_InstrComponents;
function Gen_InstrRoutineBegin() {
  //------Prepare to start Routine 'Gen_Instr'-------
  t = 0;
  Gen_InstrClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  gen_instr_key_resp = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  Gen_InstrComponents = [];
  Gen_InstrComponents.push(gen_instr_txt);
  Gen_InstrComponents.push(gen_instr_key_resp);
  Gen_InstrComponents.push(instr_cont);
  
  for (const thisComponent of Gen_InstrComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function Gen_InstrRoutineEachFrame() {
  //------Loop for each frame of Routine 'Gen_Instr'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Gen_InstrClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *gen_instr_txt* updates
  if (t >= 0.0 && gen_instr_txt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    gen_instr_txt.tStart = t;  // (not accounting for frame time here)
    gen_instr_txt.frameNStart = frameN;  // exact frame index
    gen_instr_txt.setAutoDraw(true);
  }

  
  // *gen_instr_key_resp* updates
  if (t >= 0.0 && gen_instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    gen_instr_key_resp.tStart = t;  // (not accounting for frame time here)
    gen_instr_key_resp.frameNStart = frameN;  // exact frame index
    gen_instr_key_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (gen_instr_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *instr_cont* updates
  if (t >= 0.0 && instr_cont.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instr_cont.tStart = t;  // (not accounting for frame time here)
    instr_cont.frameNStart = frameN;  // exact frame index
    instr_cont.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of Gen_InstrComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Gen_InstrRoutineEnd() {
  //------Ending Routine 'Gen_Instr'-------
  for (const thisComponent of Gen_InstrComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Gen_Instr" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var gen_instr_2_key_resp;
var gen_instr_2Components;
function gen_instr_2RoutineBegin() {
  //------Prepare to start Routine 'gen_instr_2'-------
  t = 0;
  gen_instr_2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  gen_instr_2_key_resp = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  gen_instr_2Components = [];
  gen_instr_2Components.push(gen_instr_2_txt);
  gen_instr_2Components.push(gen_instr_2_key_resp);
  gen_instr_2Components.push(instr_2_cont);
  
  for (const thisComponent of gen_instr_2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function gen_instr_2RoutineEachFrame() {
  //------Loop for each frame of Routine 'gen_instr_2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = gen_instr_2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *gen_instr_2_txt* updates
  if (t >= 0.0 && gen_instr_2_txt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    gen_instr_2_txt.tStart = t;  // (not accounting for frame time here)
    gen_instr_2_txt.frameNStart = frameN;  // exact frame index
    gen_instr_2_txt.setAutoDraw(true);
  }

  
  // *gen_instr_2_key_resp* updates
  if (t >= 0.0 && gen_instr_2_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    gen_instr_2_key_resp.tStart = t;  // (not accounting for frame time here)
    gen_instr_2_key_resp.frameNStart = frameN;  // exact frame index
    gen_instr_2_key_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (gen_instr_2_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *instr_2_cont* updates
  if (t >= 0.0 && instr_2_cont.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instr_2_cont.tStart = t;  // (not accounting for frame time here)
    instr_2_cont.frameNStart = frameN;  // exact frame index
    instr_2_cont.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of gen_instr_2Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function gen_instr_2RoutineEnd() {
  //------Ending Routine 'gen_instr_2'-------
  for (const thisComponent of gen_instr_2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "gen_instr_2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Blocks;
var currentLoop;
function BlocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'NLT_Blocks.xlsx',
    seed: undefined, name: 'Blocks'});
  psychoJS.experiment.addLoop(Blocks); // add the loop to the experiment
  currentLoop = Blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of Blocks) {
    thisScheduler.add(importConditions(Blocks));
    thisScheduler.add(ReadyRoutineBegin);
    thisScheduler.add(ReadyRoutineEachFrame);
    thisScheduler.add(ReadyRoutineEnd);
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(feedbackRoutineBegin);
    thisScheduler.add(feedbackRoutineEachFrame);
    thisScheduler.add(feedbackRoutineEnd);
  }

  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: cond_file,
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function BlocksLoopEnd() {
  psychoJS.experiment.removeLoop(Blocks);

  return Scheduler.Event.NEXT;
}

var rdy_key_resp;
var ReadyComponents;
function ReadyRoutineBegin() {
  //------Prepare to start Routine 'Ready'-------
  t = 0;
  ReadyClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  rdy_txt.setText(ready_msg);
  rdy_key_resp = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  ReadyComponents = [];
  ReadyComponents.push(rdy_txt);
  ReadyComponents.push(rdy_key_resp);
  ReadyComponents.push(rdy_cont);
  
  for (const thisComponent of ReadyComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ReadyRoutineEachFrame() {
  //------Loop for each frame of Routine 'Ready'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ReadyClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *rdy_txt* updates
  if (t >= 0.0 && rdy_txt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rdy_txt.tStart = t;  // (not accounting for frame time here)
    rdy_txt.frameNStart = frameN;  // exact frame index
    rdy_txt.setAutoDraw(true);
  }

  
  // *rdy_key_resp* updates
  if (t >= 0.0 && rdy_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rdy_key_resp.tStart = t;  // (not accounting for frame time here)
    rdy_key_resp.frameNStart = frameN;  // exact frame index
    rdy_key_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (rdy_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *rdy_cont* updates
  if (t >= 0.0 && rdy_cont.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rdy_cont.tStart = t;  // (not accounting for frame time here)
    rdy_cont.frameNStart = frameN;  // exact frame index
    rdy_cont.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ReadyComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ReadyRoutineEnd() {
  //------Ending Routine 'Ready'-------
  for (const thisComponent of ReadyComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Ready" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trial_key_resp;
var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  NL_Pair.setPos(position);
  NL_Pair.setText(pair);
  trial_key_resp = new core.BuilderKeyResponse(psychoJS);
  
  number_reminder.setText(num_reminder);
  letter_reminder.setText(lett_reminder);
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(NL_Pair);
  trialComponents.push(trial_key_resp);
  trialComponents.push(number_reminder);
  trialComponents.push(letter_reminder);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *NL_Pair* updates
  if (t >= 0.0 && NL_Pair.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    NL_Pair.tStart = t;  // (not accounting for frame time here)
    NL_Pair.frameNStart = frameN;  // exact frame index
    NL_Pair.setAutoDraw(true);
  }

  
  // *trial_key_resp* updates
  if (t >= 0.0 && trial_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    trial_key_resp.tStart = t;  // (not accounting for frame time here)
    trial_key_resp.frameNStart = frameN;  // exact frame index
    trial_key_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { trial_key_resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (trial_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['f', 'j', 'd', 'k']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      trial_key_resp.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      trial_key_resp.rt = trial_key_resp.clock.getTime();
      // was this 'correct'?
      if (trial_key_resp.keys == correct) {
          trial_key_resp.corr = 1;
      } else {
          trial_key_resp.corr = 0;
      }
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *number_reminder* updates
  if (t >= 0.0 && number_reminder.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    number_reminder.tStart = t;  // (not accounting for frame time here)
    number_reminder.frameNStart = frameN;  // exact frame index
    number_reminder.setAutoDraw(true);
  }

  
  // *letter_reminder* updates
  if (t >= 0.0 && letter_reminder.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    letter_reminder.tStart = t;  // (not accounting for frame time here)
    letter_reminder.frameNStart = frameN;  // exact frame index
    letter_reminder.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (trial_key_resp.keys === undefined || trial_key_resp.keys.length === 0) {    // No response was made
      trial_key_resp.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (trial_key_resp.keys === undefined) {
    if (['None','none',undefined].includes(correct)) {
       trial_key_resp.corr = 1  // correct non-response
    } else {
       trial_key_resp.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('trial_key_resp.keys', trial_key_resp.keys);
  psychoJS.experiment.addData('trial_key_resp.corr', trial_key_resp.corr);
  if (typeof trial_key_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('trial_key_resp.rt', trial_key_resp.rt);
      routineTimer.reset();
      }
  
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var key_resp_3;
var feedbackComponents;
function feedbackRoutineBegin() {
  //------Prepare to start Routine 'feedback'-------
  t = 0;
  feedbackClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  fdbk_txt.setText(fdbk_msg);
  key_resp_3 = new core.BuilderKeyResponse(psychoJS);
  
  fdbk_cont.setText(fdbk_cont_msg);
  // keep track of which components have finished
  feedbackComponents = [];
  feedbackComponents.push(fdbk_txt);
  feedbackComponents.push(key_resp_3);
  feedbackComponents.push(fdbk_cont);
  
  for (const thisComponent of feedbackComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function feedbackRoutineEachFrame() {
  //------Loop for each frame of Routine 'feedback'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = feedbackClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fdbk_txt* updates
  if (t >= 0.0 && fdbk_txt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fdbk_txt.tStart = t;  // (not accounting for frame time here)
    fdbk_txt.frameNStart = frameN;  // exact frame index
    fdbk_txt.setAutoDraw(true);
  }

  
  // *key_resp_3* updates
  if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    key_resp_3.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *fdbk_cont* updates
  if (t >= 0.0 && fdbk_cont.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fdbk_cont.tStart = t;  // (not accounting for frame time here)
    fdbk_cont.frameNStart = frameN;  // exact frame index
    fdbk_cont.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of feedbackComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEnd() {
  //------Ending Routine 'feedback'-------
  for (const thisComponent of feedbackComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisScheduler, thisTrial) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
