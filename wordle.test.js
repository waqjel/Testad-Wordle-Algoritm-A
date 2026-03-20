import { wordleAlgorithm } from './wordle.js';

describe('wordleAlgorithm', () => {
    
    // Test 1: Basic functionality with mixed results
    it('should correctly identify all three states in a simple word', () => {
        const result = wordleAlgorithm("TREES", "TEASE");
        
        /* T: correct
           E: misplaced (matches the first E in TREES)
           A: incorrect (not in TREES)
           S: misplaced (matches the S in TREES)
           E: misplaced (matches the second E in TREES)
        */
        expect(result[0]).toBe("correct");
        expect(result[1]).toBe("misplaced");
        expect(result[2]).toBe("incorrect");
        expect(result[3]).toBe("misplaced");
        expect(result[4]).toBe("misplaced");
    });

    // Test 2: The "Duplicate Letter" Logic
    it('should mark the second "A" as incorrect if the target only has one', () => {
        const result = wordleAlgorithm("CYCLA", "HAALÅ");

        // H: incorrect
        // A: misplaced (index 1)
        expect(result[1]).toBe("misplaced");
        
        // A: incorrect (index 2) - should trigger the custom "already exists" message
        expect(result[2]).toBe("incorrect (eftersom det redan finns ett korrekt A)");
        
        // L: correct (index 3)
        expect(result[3]).toBe("correct");
        
        // Å: incorrect (index 4)
        expect(result[4]).toBe("incorrect");
    });

});