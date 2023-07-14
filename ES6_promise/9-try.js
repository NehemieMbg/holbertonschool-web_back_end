export default function guardrail(mathFunctions) {
  const queue = [];
  let result;

  try {
    result = mathFunctions();
  } catch (error) {
    result = error.toString();
  }
  queue.push(result);
  queue.push('Guardrail was processed');

  return queue;
}
