#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.1.5),
    on January 02, 2020, at 10:21
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('3.1.5')

from psychopy import locale_setup, sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.1.5'
expName = 'Number_Letter_Task'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Jordan\\Documents\\Experiment Building\\1. Number_Letter Task\\NLT.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='MBP_Monitor', color=[0,0,0], colorSpace='hsv',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Gen_Instr"
Gen_InstrClock = core.Clock()
gen_instr_txt = visual.TextStim(win=win, name='gen_instr_txt',
    text='During this task, you will see a number-letter pair presented on the screen.\n\n        Numbers 1 through 9.\n        Letters A, E, G, I, K, M, R, and U.\n\nDuring the task, pairs will appear right away.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_cont = visual.TextStim(win=win, name='instr_cont',
    text='Press SPACE for more instructions.',
    font='Arial',
    pos=(0, -.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "gen_instr_2"
gen_instr_2Clock = core.Clock()
gen_instr_2_txt = visual.TextStim(win=win, name='gen_instr_2_txt',
    text='In this first part, pairs will appear on the top half of the screen.\n\nWhen you see a pair, decide if the number is odd or even.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_2_cont = visual.TextStim(win=win, name='instr_2_cont',
    text='Press SPACE for more instructions.',
    font='Arial',
    pos=(0, -.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "Ready"
ReadyClock = core.Clock()
rdy_txt = visual.TextStim(win=win, name='rdy_txt',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
rdy_cont = visual.TextStim(win=win, name='rdy_cont',
    text='Press SPACE to begin.',
    font='Arial',
    pos=(0, -.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
NL_Pair = visual.TextStim(win=win, name='NL_Pair',
    text='default text',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
number_reminder = visual.TextStim(win=win, name='number_reminder',
    text='default text',
    font='Arial',
    pos=(0, 0.45), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
letter_reminder = visual.TextStim(win=win, name='letter_reminder',
    text='default text',
    font='Arial',
    pos=(0, -0.45), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
fdbk_txt = visual.TextStim(win=win, name='fdbk_txt',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
fdbk_cont = visual.TextStim(win=win, name='fdbk_cont',
    text='default text',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Gen_Instr"-------
t = 0
Gen_InstrClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
gen_instr_key_resp = keyboard.Keyboard()
# keep track of which components have finished
Gen_InstrComponents = [gen_instr_txt, gen_instr_key_resp, instr_cont]
for thisComponent in Gen_InstrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Gen_Instr"-------
while continueRoutine:
    # get current time
    t = Gen_InstrClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *gen_instr_txt* updates
    if t >= 0.0 and gen_instr_txt.status == NOT_STARTED:
        # keep track of start time/frame for later
        gen_instr_txt.tStart = t  # not accounting for scr refresh
        gen_instr_txt.frameNStart = frameN  # exact frame index
        win.timeOnFlip(gen_instr_txt, 'tStartRefresh')  # time at next scr refresh
        gen_instr_txt.setAutoDraw(True)
    
    # *gen_instr_key_resp* updates
    if t >= 0.0 and gen_instr_key_resp.status == NOT_STARTED:
        # keep track of start time/frame for later
        gen_instr_key_resp.tStart = t  # not accounting for scr refresh
        gen_instr_key_resp.frameNStart = frameN  # exact frame index
        win.timeOnFlip(gen_instr_key_resp, 'tStartRefresh')  # time at next scr refresh
        gen_instr_key_resp.status = STARTED
        # keyboard checking is just starting
        gen_instr_key_resp.clearEvents(eventType='keyboard')
    if gen_instr_key_resp.status == STARTED:
        theseKeys = gen_instr_key_resp.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # *instr_cont* updates
    if t >= 0.0 and instr_cont.status == NOT_STARTED:
        # keep track of start time/frame for later
        instr_cont.tStart = t  # not accounting for scr refresh
        instr_cont.frameNStart = frameN  # exact frame index
        win.timeOnFlip(instr_cont, 'tStartRefresh')  # time at next scr refresh
        instr_cont.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Gen_InstrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Gen_Instr"-------
for thisComponent in Gen_InstrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Gen_Instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "gen_instr_2"-------
t = 0
gen_instr_2Clock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
gen_instr_2_key_resp = keyboard.Keyboard()
# keep track of which components have finished
gen_instr_2Components = [gen_instr_2_txt, gen_instr_2_key_resp, instr_2_cont]
for thisComponent in gen_instr_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "gen_instr_2"-------
while continueRoutine:
    # get current time
    t = gen_instr_2Clock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *gen_instr_2_txt* updates
    if t >= 0.0 and gen_instr_2_txt.status == NOT_STARTED:
        # keep track of start time/frame for later
        gen_instr_2_txt.tStart = t  # not accounting for scr refresh
        gen_instr_2_txt.frameNStart = frameN  # exact frame index
        win.timeOnFlip(gen_instr_2_txt, 'tStartRefresh')  # time at next scr refresh
        gen_instr_2_txt.setAutoDraw(True)
    
    # *gen_instr_2_key_resp* updates
    if t >= 0.0 and gen_instr_2_key_resp.status == NOT_STARTED:
        # keep track of start time/frame for later
        gen_instr_2_key_resp.tStart = t  # not accounting for scr refresh
        gen_instr_2_key_resp.frameNStart = frameN  # exact frame index
        win.timeOnFlip(gen_instr_2_key_resp, 'tStartRefresh')  # time at next scr refresh
        gen_instr_2_key_resp.status = STARTED
        # keyboard checking is just starting
        gen_instr_2_key_resp.clearEvents(eventType='keyboard')
    if gen_instr_2_key_resp.status == STARTED:
        theseKeys = gen_instr_2_key_resp.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # *instr_2_cont* updates
    if t >= 0.0 and instr_2_cont.status == NOT_STARTED:
        # keep track of start time/frame for later
        instr_2_cont.tStart = t  # not accounting for scr refresh
        instr_2_cont.frameNStart = frameN  # exact frame index
        win.timeOnFlip(instr_2_cont, 'tStartRefresh')  # time at next scr refresh
        instr_2_cont.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in gen_instr_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "gen_instr_2"-------
for thisComponent in gen_instr_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "gen_instr_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Blocks = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('NLT_Blocks.xlsx'),
    seed=None, name='Blocks')
thisExp.addLoop(Blocks)  # add the loop to the experiment
thisBlock = Blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in Blocks:
    currentLoop = Blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Ready"-------
    t = 0
    ReadyClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    rdy_txt.setText(ready_msg
)
    rdy_key_resp = keyboard.Keyboard()
    # keep track of which components have finished
    ReadyComponents = [rdy_txt, rdy_key_resp, rdy_cont]
    for thisComponent in ReadyComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "Ready"-------
    while continueRoutine:
        # get current time
        t = ReadyClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *rdy_txt* updates
        if t >= 0.0 and rdy_txt.status == NOT_STARTED:
            # keep track of start time/frame for later
            rdy_txt.tStart = t  # not accounting for scr refresh
            rdy_txt.frameNStart = frameN  # exact frame index
            win.timeOnFlip(rdy_txt, 'tStartRefresh')  # time at next scr refresh
            rdy_txt.setAutoDraw(True)
        
        # *rdy_key_resp* updates
        if t >= 0.0 and rdy_key_resp.status == NOT_STARTED:
            # keep track of start time/frame for later
            rdy_key_resp.tStart = t  # not accounting for scr refresh
            rdy_key_resp.frameNStart = frameN  # exact frame index
            win.timeOnFlip(rdy_key_resp, 'tStartRefresh')  # time at next scr refresh
            rdy_key_resp.status = STARTED
            # keyboard checking is just starting
            rdy_key_resp.clearEvents(eventType='keyboard')
        if rdy_key_resp.status == STARTED:
            theseKeys = rdy_key_resp.getKeys(keyList=['space'], waitRelease=False)
            if len(theseKeys):
                theseKeys = theseKeys[0]  # at least one key was pressed
                
                # check for quit:
                if "escape" == theseKeys:
                    endExpNow = True
                # a response ends the routine
                continueRoutine = False
        
        # *rdy_cont* updates
        if t >= 0.0 and rdy_cont.status == NOT_STARTED:
            # keep track of start time/frame for later
            rdy_cont.tStart = t  # not accounting for scr refresh
            rdy_cont.frameNStart = frameN  # exact frame index
            win.timeOnFlip(rdy_cont, 'tStartRefresh')  # time at next scr refresh
            rdy_cont.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ReadyComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Ready"-------
    for thisComponent in ReadyComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(cond_file),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trial"-------
        t = 0
        trialClock.reset()  # clock
        frameN = -1
        continueRoutine = True
        # update component parameters for each repeat
        NL_Pair.setPos(position)
        NL_Pair.setText(pair)
        trial_key_resp = keyboard.Keyboard()
        number_reminder.setText(num_reminder)
        letter_reminder.setText(lett_reminder)
        # keep track of which components have finished
        trialComponents = [NL_Pair, trial_key_resp, number_reminder, letter_reminder]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        
        # -------Start Routine "trial"-------
        while continueRoutine:
            # get current time
            t = trialClock.getTime()
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *NL_Pair* updates
            if t >= 0.0 and NL_Pair.status == NOT_STARTED:
                # keep track of start time/frame for later
                NL_Pair.tStart = t  # not accounting for scr refresh
                NL_Pair.frameNStart = frameN  # exact frame index
                win.timeOnFlip(NL_Pair, 'tStartRefresh')  # time at next scr refresh
                NL_Pair.setAutoDraw(True)
            
            # *trial_key_resp* updates
            if t >= 0.0 and trial_key_resp.status == NOT_STARTED:
                # keep track of start time/frame for later
                trial_key_resp.tStart = t  # not accounting for scr refresh
                trial_key_resp.frameNStart = frameN  # exact frame index
                win.timeOnFlip(trial_key_resp, 'tStartRefresh')  # time at next scr refresh
                trial_key_resp.status = STARTED
                # keyboard checking is just starting
                win.callOnFlip(trial_key_resp.clock.reset)  # t=0 on next screen flip
                trial_key_resp.clearEvents(eventType='keyboard')
            if trial_key_resp.status == STARTED:
                theseKeys = trial_key_resp.getKeys(keyList=['f', 'j', 'd', 'k'], waitRelease=False)
                if len(theseKeys):
                    theseKeys = theseKeys[0]  # at least one key was pressed
                    
                    # check for quit:
                    if "escape" == theseKeys:
                        endExpNow = True
                    trial_key_resp.keys = theseKeys.name  # just the last key pressed
                    trial_key_resp.rt = theseKeys.rt
                    # was this 'correct'?
                    if (trial_key_resp.keys == str(correct)) or (trial_key_resp.keys == correct):
                        trial_key_resp.corr = 1
                    else:
                        trial_key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *number_reminder* updates
            if t >= 0.0 and number_reminder.status == NOT_STARTED:
                # keep track of start time/frame for later
                number_reminder.tStart = t  # not accounting for scr refresh
                number_reminder.frameNStart = frameN  # exact frame index
                win.timeOnFlip(number_reminder, 'tStartRefresh')  # time at next scr refresh
                number_reminder.setAutoDraw(True)
            
            # *letter_reminder* updates
            if t >= 0.0 and letter_reminder.status == NOT_STARTED:
                # keep track of start time/frame for later
                letter_reminder.tStart = t  # not accounting for scr refresh
                letter_reminder.frameNStart = frameN  # exact frame index
                win.timeOnFlip(letter_reminder, 'tStartRefresh')  # time at next scr refresh
                letter_reminder.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if trial_key_resp.keys in ['', [], None]:  # No response was made
            trial_key_resp.keys = None
            # was no response the correct answer?!
            if str(correct).lower() == 'none':
               trial_key_resp.corr = 1;  # correct non-response
            else:
               trial_key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('trial_key_resp.keys',trial_key_resp.keys)
        trials.addData('trial_key_resp.corr', trial_key_resp.corr)
        if trial_key_resp.keys != None:  # we had a response
            trials.addData('trial_key_resp.rt', trial_key_resp.rt)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
    
    # ------Prepare to start Routine "feedback"-------
    t = 0
    feedbackClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    fdbk_txt.setText(fdbk_msg)
    key_resp_3 = keyboard.Keyboard()
    fdbk_cont.setText(fdbk_cont_msg)
    # keep track of which components have finished
    feedbackComponents = [fdbk_txt, key_resp_3, fdbk_cont]
    for thisComponent in feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "feedback"-------
    while continueRoutine:
        # get current time
        t = feedbackClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fdbk_txt* updates
        if t >= 0.0 and fdbk_txt.status == NOT_STARTED:
            # keep track of start time/frame for later
            fdbk_txt.tStart = t  # not accounting for scr refresh
            fdbk_txt.frameNStart = frameN  # exact frame index
            win.timeOnFlip(fdbk_txt, 'tStartRefresh')  # time at next scr refresh
            fdbk_txt.setAutoDraw(True)
        
        # *key_resp_3* updates
        if t >= 0.0 and key_resp_3.status == NOT_STARTED:
            # keep track of start time/frame for later
            key_resp_3.tStart = t  # not accounting for scr refresh
            key_resp_3.frameNStart = frameN  # exact frame index
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            key_resp_3.clearEvents(eventType='keyboard')
        if key_resp_3.status == STARTED:
            theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
            if len(theseKeys):
                theseKeys = theseKeys[0]  # at least one key was pressed
                
                # check for quit:
                if "escape" == theseKeys:
                    endExpNow = True
                # a response ends the routine
                continueRoutine = False
        
        # *fdbk_cont* updates
        if t >= 0.0 and fdbk_cont.status == NOT_STARTED:
            # keep track of start time/frame for later
            fdbk_cont.tStart = t  # not accounting for scr refresh
            fdbk_cont.frameNStart = frameN  # exact frame index
            win.timeOnFlip(fdbk_cont, 'tStartRefresh')  # time at next scr refresh
            fdbk_cont.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback"-------
    for thisComponent in feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'Blocks'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
