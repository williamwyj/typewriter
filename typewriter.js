const sentence = 'hello there from lighthouse labs';
timer = 0;
for (let i = 0;i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, timer += 50)
}