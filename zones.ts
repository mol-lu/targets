/** 
 * zones.ts
 * 
 * To get own subdomain, insert a line below with format:
 * 'subdomain': 'CNAME;example.com'
 *  ^1           ^2    ^3
 * 1: Subdomain without root domain part (Lowercase)
 * 2: Type of record, CNAME only supported (Uppercase)
 * 3: Value of record, write full fdqn (Lowercase)
 * 
 * If you want cloudflare proxy, just add ';PROXY' at end of value like below:
 * 'subdomain': 'CNAME;example.com;PROXY'
 * 
 * Some subdomains are NOT allowed for prevent abuse. For example, 'admin', 'about' are not accepted.
 */ 


export default {
	'': 'CNAME;mol-lu.github.io;PROXY',
	'www': 'CNAME;@;PROXY'
}
