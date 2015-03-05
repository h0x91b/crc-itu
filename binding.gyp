{
  "targets": [
    {
      "target_name": "crc-itu",
      "sources": [ "lib/crc-itu.cc" ],
      "include_dirs" : [
          "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}