const match = (candidate, job) => {
  if (!candidate.minSalary || !job.maxSalary) throw new Error("Missing salary information");
  return job.maxSalary >= candidate.minSalary * 0.9;
};
​