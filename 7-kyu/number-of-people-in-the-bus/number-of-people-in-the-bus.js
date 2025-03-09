const number = busStops => 
  busStops.reduce((remaining, [on, off]) => remaining + on - off, 0);
​