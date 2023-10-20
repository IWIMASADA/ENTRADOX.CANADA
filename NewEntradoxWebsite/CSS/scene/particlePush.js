function pushParticles(particles, cursor, pushForce) {
    const particlePositions = particles.geometry.attributes.position;
  
    for (let i = 0; i < particlePositions.array.length; i += 3) {
      const particleX = particlePositions.array[i];
      const particleY = particlePositions.array[i + 1];
  
      const distanceSquared = (particleX - cursor.x) ** 2 + (particleY - cursor.y) ** 2;
      const distance = Math.sqrt(distanceSquared);
  
      if (distance < 0.2) {
        const forceX = (particleX - cursor.x) * pushForce;
        const forceY = (particleY - cursor.y) * pushForce;
  
        particlePositions.array[i] += forceX;
        particlePositions.array[i + 1] += forceY;
      }
    }
  
    particles.geometry.attributes.position.needsUpdate = true;
  }
  