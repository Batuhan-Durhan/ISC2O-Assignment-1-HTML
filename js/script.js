// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: Batuhan Durhan
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates perimeter of triangle.
 */
function calculate() {
  // input
  const sideleft = parseInt(document.getElementById('sideleft-of-triangle').value)
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const sideright = parseInt(document.getElementById('sideright-of-triangle').value)

  // process
  const perimeter = sideleft + base + sideright

  // output
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
