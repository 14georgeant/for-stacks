;; Simple contract to store and retrieve a message
(define-data-var message (string-utf8 100) u"Hello, Stacks!")
(define-public (set-message (new-message (string-utf8 100)))
  (begin
    (var-set message new-message)
    (ok true)
  )
)
(define-read-only (get-message)
  (ok (var-get message))
)