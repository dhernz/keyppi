// Firebase Functions SDK
import functions from "firebase-functions";
import _ from "underscore";
import * as url from "url";
import { SudokuZkApp, submitSolution, Sudoku } from "sudoku_uwu"; 
import { cloneSudoku, generateSudoku, solveSudoku } from '../../node_modules/sudoku_uwu/build/src/sudoku-lib.js';

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let httpVerificationServices = functions.https.onCall(async (data, context) => {
  console.log("incoming: ", data);
  // console.log("context: ", context);
  
  try {
      switch (data.method) {
        case "testContract":
            let contract = await sudoku();
            return contract;
        default:
            return ({data:{message: "No valid method provided"}});
      }
  } catch (error) {
      return error;
  }
});

/**
 * @returns {json} un objeto json con 3 atributos:
 * token_type: el tipo de token para firmar los requests
 * expires_in: tiempo de duración del token en segundos
 * token: el valor del token para firmar los requests
 */
const sudoku = () => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("Initializing zkApp...");
        let contract = new SudokuZkApp("B62qrC934sC7XsVfSd7JT6ybcfgYer1iAjic8S535nJf2afjx3nRW7S");
        console.log("Initialized zkApp...:", contract);
        console.log("Generating Sudoku...");
        let parm1 = generateSudoku(0.5);
        console.log("Generated sudoku...:", parm1);
        console.log("Generating solution for sudoku...");
        let parm2 = solveSudoku(parm1);
        console.log("Generated solution for sudoku...:", parm2);
        console.log("Casting problem to Sudoku type Object...");
        let problem = new Sudoku(parm1);
        console.log("Casted problem to Sudoku type Object...:", problem);
        console.log("Casting solution to Sudoku type Object...");
        let solution = new Sudoku(parm2);
        console.log("Casted solution to Sudoku type Object...:", problem);
        try {
          console.log("Submitting solution...");
          // let testContract = await contract.submitSolution(parm1, parm2);
          let testContract = await contract.submitSolution(problem, solution);
          //   "B62qphDTxPu59YSpb1XebPFixFMu1vN6mqKQ7bCBtejdAS3LctWFfn7", // Public Key
          //   "B62qphDTxPu59YSpb1XebPFixFMu1vN6mqKQ7bCBtejdAS3LctWFfn7", // zkApp Public Key
          //   "EKE7N8xMWKZqQ3Xiz2o1pBZSgrD1BqQ5pZsUnSfUcqqdPcQVHH6Z" // Private Key
          // );
          console.log("Solution response...:", testContract);
          resolve(testContract);
        } catch (error) {
          console.log("Error while attempting to submit solution...:", error);
          reject(error);
        }
      } catch (error) {
        console.log("Error during instantiation of zkApp or sudoku handling...:", error);
        reject(error);
      }
    });
};

export {httpVerificationServices};

