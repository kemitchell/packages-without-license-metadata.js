var output = []

var notes = {
  xtend: {
    '1.0.0': {
      terms: ['LICENSE'],
      spdx: 'MIT'
    },
    '1.0.1': false,
    '1.0.2': false,
    '1.0.3': {
      terms: ['LICENSE', 'README.md'],
      comments: [
        'added "MIT Licensed" to README.md',
        'added "and xtend contributors" to LICENSE'
      ]
    },
    '2.0.1': false,
    '2.0.2': false,
    '2.0.3': false,
    '2.0.4': false,
    '2.0.5': false,
    '2.0.6': false,
    '2.1.1': false,
    '2.1.2': false,
    '2.2.0': false,
    '3.0.0': {comments: ['replaced notice with "Copyright 2012-2014 Raynos"']},
    '4.0.0': false,
    '4.0.1': false
  }
}

Object.keys(notes).forEach(function (name) {
  var versions = notes[name]
  var terms, spdx
  Object.keys(versions).forEach(function (version) {
    var data = versions[version]
    if (data) {
      if (data.terms) terms = data.terms
      if (data.spdx) spdx = data.spdx
    }
    var entry = {
      name: name,
      version: version
    }
    if (terms) entry.terms = terms
    if (spdx) entry.spdx = spdx
    if (data.comments) entry.comments = data.comments
    output.push(entry)
  })
})


if (module.parent) module.exports = output
else console.log(JSON.stringify(output, null, 2))
