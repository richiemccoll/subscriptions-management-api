export default function asyncWrapper(fn) {
  return (req, res, next) => {
    return fn(req, res).catch(next);
  };
}
