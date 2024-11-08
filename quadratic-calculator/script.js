document.addEventListener('DOMContentLoaded', () => {
    const solveButton = document.getElementById('solve');
    const resultContainer = document.getElementById('result');
    
    // Set default values
    document.getElementById('a').value = 1;
    document.getElementById('b').value = 1;
    document.getElementById('c').value = 16;
    
    // Function to handle solving
    const solveEquation = () => {
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);
        
        if (a === 0) {
            alert('Coefficient "a" cannot be zero');
            return;
        }
        
        const discriminant = b * b - 4 * a * c;
        
        let steps = `
            <div class="bg-white p-6 rounded-md shadow-md space-y-6">
                <h2 class="font-bold text-xl text-blue-600">Step by Step Solution</h2>
                
                <div class="space-y-3">
                    <p class="font-semibold">1. Given quadratic equation:</p>
                    <p class="pl-6 font-mono">${a}x² + ${b}x + ${c} = 0</p>
                </div>

                <div class="space-y-3">
                    <p class="font-semibold">2. Using quadratic formula:</p>
                    <p class="pl-6 font-mono">x = (-b ± √(b² - 4ac)) / 2a</p>
                    <p class="pl-6">Where a = ${a}, b = ${b}, c = ${c}</p>
                </div>

                <div class="space-y-3">
                    <p class="font-semibold">3. Calculate discriminant (b² - 4ac):</p>
                    <p class="pl-6 font-mono">Δ = (${b})² - 4(${a})(${c})</p>
                    <p class="pl-6 font-mono">Δ = ${b * b} - ${4 * a * c}</p>
                    <p class="pl-6 font-mono">Δ = ${discriminant}</p>
                </div>
        `;

        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            steps += `
                <div class="space-y-3">
                    <p class="font-semibold">4. Since Δ > 0, there are two real solutions:</p>
                    <p class="pl-6 font-mono">x₁ = (-${b} + √${discriminant}) / (2 × ${a})</p>
                    <p class="pl-6 font-mono">x₂ = (-${b} - √${discriminant}) / (2 × ${a})</p>
                </div>
                <div class="space-y-3">
                    <p class="font-semibold">5. Simplify:</p>
                    <p class="pl-6 font-mono">x₁ = ${x1.toFixed(2)}</p>
                    <p class="pl-6 font-mono">x₂ = ${x2.toFixed(2)}</p>
                </div>
            `;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            steps += `
                <div class="space-y-3">
                    <p class="font-semibold">4. Since Δ = 0, there is one repeated solution:</p>
                    <p class="pl-6 font-mono">x = -${b} / (2 × ${a})</p>
                </div>
                <div class="space-y-3">
                    <p class="font-semibold">5. Simplify:</p>
                    <p class="pl-6 font-mono">x = ${x.toFixed(2)}</p>
                </div>
            `;
        } else {
            const realPart = (-b / (2 * a)).toFixed(2);
            const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
            steps += `
                <div class="space-y-3">
                    <p class="font-semibold">4. Since Δ < 0, there are two complex solutions:</p>
                    <p class="pl-6 font-mono">x = (-${b} ± √${-discriminant}i) / (2 × ${a})</p>
                </div>
                <div class="space-y-3">
                    <p class="font-semibold">5. Simplify:</p>
                    <p class="pl-6 font-mono">x₁ = ${realPart} + ${imagPart}i</p>
                    <p class="pl-6 font-mono">x₂ = ${realPart} - ${imagPart}i</p>
                </div>
            `;
        }

        steps += '</div>';
        
        resultContainer.innerHTML = steps;
    };
    
    // Add click event listener
    solveButton.addEventListener('click', solveEquation);
    
    // Automatically trigger solve on page load
    solveEquation();
});
